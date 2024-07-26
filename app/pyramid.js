'use client'

import { useState } from 'react';
import styles from "./page.module.css";

function PyramidGenerator() {
    const character = "!";
    const count = 10;
    const [rows, setRows] = useState([]);
    const inverted = false;

    function padRow(rowNumber, rowCount) {
        return (
            " ".repeat(rowCount - rowNumber) +
            character.repeat(2 * rowNumber - 1) +
            " ".repeat(rowCount - rowNumber)
        );
    }

    function generatePyramid() {
        const newRows = [];
        for (let i = 1; i <= count; i++) {
            if (inverted) {
                newRows.unshift(padRow(i, count));
            } else {
                newRows.push(padRow(i, count));
            }
        }
        setRows(newRows);
    }

    return (
        <>
            <button className={styles.button} onClick={generatePyramid}>Generate Pyramid</button>
            <pre className={styles.card}>
                {rows.map((row, index) => (
                    <div key={index}>{row}</div>
                ))}
            </pre>
        </>
    );
}

export default PyramidGenerator;
