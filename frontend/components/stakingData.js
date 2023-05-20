import styles from "../styles/Home.module.css";

export default function StakingData() {
  return (
    <section className={styles.stakingDataContainer}>
      <section className={styles.stakingData}>
        <span className={styles.stakingData_label}>Total Staked Tokens</span>
        <span className={styles.stakingData_value}>11,11,088</span>
      </section>
      <section className={styles.stakingData}>
        <span className={styles.stakingData_label}>Total Renewal Paid</span>
        <span className={styles.stakingData_value}>$8,000,000</span>
      </section>
      <section className={styles.stakingData}>
        <span className={styles.stakingData_label}>Stakers</span>
        <span className={styles.stakingData_value}>88,011</span>
      </section>
    </section>
  );
}
