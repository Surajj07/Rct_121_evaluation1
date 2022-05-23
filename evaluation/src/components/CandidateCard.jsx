import styles from "./CandidateCard.module.css";

function CandidateCard({name,avatar,rating,title,salary,company_name,createdAt}) {
  return (
    <div data-testid="candidate-container" className={styles.container}>
      <img src={avatar} alt="logo" width="100px" height="100px" />
      <div>
        <div>Name:{name}</div>
        <div>{title} - {company_name}</div>
      </div>
      <div>$ {salary}</div>
    </div>
  );
}

export default CandidateCard;
