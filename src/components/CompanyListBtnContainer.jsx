const CompanyListBtnContainer = ({
  jobs,
  currentSelectedJob,
  setCurrentSelectedJob,
}) => {
    
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            key={job.id}
            onClick={() => setCurrentSelectedJob(index)}
            className={
              currentSelectedJob === index ? "job-btn active-btn" : "job-btn"
            }
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};

export default CompanyListBtnContainer;
