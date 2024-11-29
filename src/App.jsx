const url = "https://www.course-api.com/react-tabs-project";
import { useState, useEffect } from "react";
import CompanyListBtnContainer from "./components/CompanyListBtnContainer";
import JobDescriptionContainer from "./components/JobDescriptionContainer";

const App = () => {
  /*
  -WE WOULD NEED 3 STATES
    ->One for storing the jobs array that has been fetched from the api
    ->A state for keeping the track which job has been selected
  */
  const [jobs, setJobs] = useState([]);
  // let jobs;
  const [currentSelectedJob, setCurrentSelectedJob] = useState(0); //0th job by default
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    /*
    ->updating the isLoading state will trigger a re-render. However, in your 
    current code, the re-render doesn't know about the new jobs data because jobs is 
    a regular variable, not a state variable. React only tracks state and props for 
    triggering updates in the UI.
    */ 
    setJobs(data);
    // jobs=data;
    setIsLoading(false);
  };
  /*
  ->Fetching the data is a sideeffect.
  ->So we should put it in an useEffect hook
  */
  //fetchData(url);   //note that doing this outside of useEffect gives you an infinite loop
  useEffect(() => {
    fetchData(url);
  }, []);

  /*
  ->Note an important thing that in order to mitigate the delay caused while loading the data
  from the fetch function, use can use the seperate loading component and state
  */

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <CompanyListBtnContainer
        jobs={jobs}
        currentSelectedJob={currentSelectedJob}
        setCurrentSelectedJob={setCurrentSelectedJob}
      />
      <JobDescriptionContainer
        jobs={jobs}
        currentSelectedJob={currentSelectedJob}
      />
    </section>
  );
};
export default App;
