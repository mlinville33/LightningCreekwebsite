import React, { useState, useEffect, useCallback, useRef } from "react";
import styles from './CfaTimerPage.module.css';

const FLASH_SECONDS = 60;

const DEFAULT_ITEMS = [
    { id: 'strips', name: 'Strips', seconds: 600, color: '#0f3460' },
    { id: 'nuggets', name: 'Nuggets', seconds: 600, color: '#0f3460' },
    { id: 'grilled-fillet', name: 'Grilled Fillet', seconds: 600, color: '#0f3460' },
    { id: 'grilled-nuggets', name: 'Grilled Nuggets', seconds: 600, color: '#0f3460' },
];

const COLOR_PRESETS = [
    '#0f3460', '#1b4332', '#5a189a', '#6a040f',
    '#003566', '#3a0ca3', '#7b2d26', '#2d6a4f',
];

function formatTime(totalSeconds) {
    const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const s = (totalSeconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

function parseMinutesSeconds(str) {
    const parts = str.split(':');
    if (parts.length === 2) {
        const m = parseInt(parts[0], 10);
        const s = parseInt(parts[1], 10);
        if (!isNaN(m) && !isNaN(s) && m >= 0 && s >= 0 && s < 60) return m * 60 + s;
    }
    const n = parseInt(str, 10);
    if (!isNaN(n) && n > 0) return n * 60;
    return null;
}

const TimerBox = ({ item, onUpdate, onDelete }) => {
    const [timerState, setTimerState] = useState('idle');
    const [remaining, setRemaining] = useState(item.seconds);
    const [flashRemaining, setFlashRemaining] = useState(FLASH_SECONDS);
    const [editing, setEditing] = useState(false);
    const [editName, setEditName] = useState(item.name);
    const [editTime, setEditTime] = useState(formatTime(item.seconds));
    const [editColor, setEditColor] = useState(item.color);
    const intervalRef = useRef(null);

    useEffect(() => {
        setRemaining(item.seconds);
    }, [item.seconds]);

    const clearTimer = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    useEffect(() => {
        return clearTimer;
    }, [clearTimer]);

    useEffect(() => {
        if (timerState === 'running') {
            intervalRef.current = setInterval(() => {
                setRemaining((prev) => {
                    if (prev <= 1) {
                        clearTimer();
                        setTimerState('flashing');
                        setFlashRemaining(FLASH_SECONDS);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
            return clearTimer;
        }

        if (timerState === 'flashing') {
            intervalRef.current = setInterval(() => {
                setFlashRemaining((prev) => {
                    if (prev <= 1) {
                        clearTimer();
                        setTimerState('idle');
                        setRemaining(item.seconds);
                        return FLASH_SECONDS;
                    }
                    return prev - 1;
                });
            }, 1000);
            return clearTimer;
        }
    }, [timerState, clearTimer, item.seconds]);

    const handleClick = () => {
        if (editing || timerState !== 'idle') return;
        setRemaining(item.seconds);
        setTimerState('running');
    };

    const handleCancel = (e) => {
        e.stopPropagation();
        clearTimer();
        setTimerState('idle');
        setRemaining(item.seconds);
    };

    const handleReset = (e) => {
        e.stopPropagation();
        clearTimer();
        setRemaining(item.seconds);
        setTimerState('running');
    };

    const openEdit = (e) => {
        e.stopPropagation();
        setEditName(item.name);
        setEditTime(formatTime(item.seconds));
        setEditColor(item.color);
        setEditing(true);
    };

    const saveEdit = (e) => {
        e.stopPropagation();
        const parsed = parseMinutesSeconds(editTime);
        if (!editName.trim() || parsed === null) return;
        onUpdate({ ...item, name: editName.trim(), seconds: parsed, color: editColor });
        setEditing(false);
    };

    const cancelEdit = (e) => {
        e.stopPropagation();
        setEditing(false);
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        onDelete(item.id);
    };

    let boxClass = styles.timerBox;
    if (timerState === 'running') boxClass += ` ${styles.running}`;
    if (timerState === 'flashing') boxClass += ` ${styles.flashing}`;

    const boxStyle = {
        '--box-color': item.color,
        borderColor: item.color,
        background: item.color,
    };

    if (editing) {
        return (
            <div className={`${styles.timerBox} ${styles.editMode}`} style={{ '--box-color': editColor, borderColor: editColor, background: editColor }} onClick={(e) => e.stopPropagation()}>
                <div className={styles.editForm}>
                    <label className={styles.editLabel}>
                        Name
                        <input
                            type="text"
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                            className={styles.editInput}
                            maxLength={30}
                        />
                    </label>
                    <label className={styles.editLabel}>
                        Time (MM:SS)
                        <input
                            type="text"
                            value={editTime}
                            onChange={(e) => setEditTime(e.target.value)}
                            className={styles.editInput}
                            placeholder="10:00"
                        />
                    </label>
                    <div className={styles.editLabel}>
                        Color
                        <div className={styles.colorRow}>
                            {COLOR_PRESETS.map((c) => (
                                <button
                                    key={c}
                                    type="button"
                                    className={`${styles.colorSwatch} ${editColor === c ? styles.colorSelected : ''}`}
                                    style={{ background: c }}
                                    onClick={() => setEditColor(c)}
                                    aria-label={`Color ${c}`}
                                />
                            ))}
                            <input
                                type="color"
                                value={editColor}
                                onChange={(e) => setEditColor(e.target.value)}
                                className={styles.colorPicker}
                                aria-label="Custom color"
                            />
                        </div>
                    </div>
                    <div className={styles.editActions}>
                        <button type="button" className={styles.saveBtn} onClick={saveEdit}>Save</button>
                        <button type="button" className={styles.cancelBtn} onClick={cancelEdit}>Cancel</button>
                        <button type="button" className={styles.deleteBtn} onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={boxClass} style={boxStyle} onClick={handleClick} role="button" tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(); }}
            aria-label={`${item.name} timer${timerState === 'running' ? `, ${formatTime(remaining)} remaining` : ''}`}
        >
            {timerState === 'idle' && (
                <button type="button" className={styles.editBtn} onClick={openEdit} aria-label={`Edit ${item.name}`}>
                    &#9998;
                </button>
            )}
            <div className={styles.itemName}>{item.name}</div>
            <div className={styles.timerDisplay}>
                {timerState === 'running' && formatTime(remaining)}
                {timerState === 'flashing' && 'DONE'}
            </div>
            {timerState === 'idle' && <div className={styles.hint}>Tap to start timer</div>}
            {(timerState === 'running' || timerState === 'flashing') && (
                <div className={styles.timerActions}>
                    <button type="button" className={styles.resetBtn} onClick={handleReset}>Reset</button>
                    <button type="button" className={styles.cancelTimerBtn} onClick={handleCancel}>Cancel</button>
                </div>
            )}
        </div>
    );
};

const CfaTimerPage = () => {
    const [items, setItems] = useState(DEFAULT_ITEMS);

    const handleUpdate = (updated) => {
        setItems((prev) => prev.map((it) => it.id === updated.id ? updated : it));
    };

    const handleDelete = (id) => {
        setItems((prev) => prev.filter((it) => it.id !== id));
    };

    const handleAdd = () => {
        const newItem = {
            id: `timer-${Date.now()}`,
            name: 'New Timer',
            seconds: 600,
            color: COLOR_PRESETS[0],
        };
        setItems((prev) => [...prev, newItem]);
    };

    return (
        <main className={styles.page}>
            <div className={styles.container}>
                {items.map((item) => (
                    <TimerBox key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
                ))}
                <button type="button" className={styles.addBtn} onClick={handleAdd}>
                    + Add Timer
                </button>
            </div>
        </main>
    );
};

export default CfaTimerPage;
