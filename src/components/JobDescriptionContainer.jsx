import Duties from "./Duties";

const JobDescriptionContainer = ({ jobs, currentSelectedJob }) => {
  // console.log(jobs);

/*
->Based on the currentSelectedJob state-that we are creating on the CompanyListBtnContainer,
we are displaying this component
*/   
  const { company, dates, duties, title } = jobs[currentSelectedJob];

  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};

export default JobDescriptionContainer;
