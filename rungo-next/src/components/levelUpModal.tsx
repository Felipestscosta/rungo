import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
    const { level, closeUpLevelModal } = useContext(ChallengesContext);

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>

                <button
                    onClick={closeUpLevelModal}
                >
                    <img src="/icons/close.svg" alt="Close icon" />
                </button>
            </div>

        </div>
    )
}