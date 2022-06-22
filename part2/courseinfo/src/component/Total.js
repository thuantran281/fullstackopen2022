const Total = ({ course }) => {
  //console.log(course)
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <b>
      <ul>total of {total} exercises</ul>
    </b>
  );
};

export default Total;
