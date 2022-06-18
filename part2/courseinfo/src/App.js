const Title = ({ title }) => {
  return (
    <h1>Web development curriculum</h1>
  )
}

const Header = ({ course }) => {
  return <h2>{course.name}</h2>;
};

const Content = ({ course }) => {
  return (
    <ul>
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </ul>
  );
};

const Part = ({ part }) => {
  //console.log(part)
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Total = ({ course }) => {
  //console.log(course)
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <b>
      <ul>total of {total} exercises</ul>
    </b>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Title course={course.title} />
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    courses.map((course) => 
      <ul key={course.id}>
        <Course course={course} />
      </ul>
    )
  )
};

export default App;
