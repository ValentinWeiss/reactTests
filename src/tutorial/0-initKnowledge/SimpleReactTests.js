import React from "react";

// This is a component function must have capital letter
// inline style always is stronger then css classes so careful with them
// style has to be defined as js object values in parantacies
// classes have to be added via className= property
// import css first
// props.children is all the stuff that is placed between the opening and closing tag when its called
//function Greeting(props) {
function Greeting({ prop1, prop2, children }) {
  const title = "Some variable title";
  return (
    <section>
      <h4 style={{ color: "red" }}>
        this is john and this is my first component
      </h4>
      <h5>{title}</h5>
      {children}
      {/* or access via props.blah */}
      <p>{prop1}</p>
      <p>{prop2}</p>
    </section>
  );
}

const Test1 = () => {
  return (
    <Greeting prop1="hi there!!!!" prop2="hi2">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex excepturi ea
        in quisquam culpa repudiandae distinctio debitis veritatis id quidem.
      </p>
    </Greeting>
  );
};

const ArrayTest = () => {
  // some array (can also be given via props)
  const someObjectArr = [
    {
      id: 1,
      prop1: "blah11",
      prop2: "blah12",
    },
    {
      id: 2,
      prop1: "blah21",
      prop2: "blah22",
    },
    {
      id: 3,
      prop1: "blah31",
      prop2: "blah32",
    },
  ];
  const stringArr = ["saas", "soos"];
  const strings = stringArr.map((str) => {
    console.log(str);
    return <h1>str</h1>;
  });
  //return <section>{strings}</section>;

  // {...obj} does destructure the parameters of the Object into seperate attribute=value calls so i can keep using the Greetings function from Test1
  // set the key in the return map thingy to later access it with adding/removing items and so on
  return (
    <section>
      {someObjectArr.map((obj) => {
        return <Greeting key={obj.id} {...obj} />;
      })}
    </section>
  );
};

const Test2 = () => {
  return <ArrayTest></ArrayTest>;
};

// Setup event handler that you can pass to the event or use inline event
// all event accessable on
// https://reactjs.org/docs/events.html
const ClickEvent = () => {
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Clicccc ");
  };

  const clickHandler3 = (someProp) => {
    alert("Clicccc " + someProp);
  };
  return (
    <div>
      <button type="button" onClick={clickHandler}>
        Test Button
      </button>
      <button
        type="button"
        onClick={() => {
          alert("Clicccc2");
        }}
      >
        Test Button2
      </button>
      {/* If some arguments are passed in to an event you have to use the arrow fkt otherwise it will be called
      on page loadup */}
      <button type="button" onClick={() => clickHandler3("blahhh")}>
        Test Button
      </button>
    </div>
  );
};

// Events
const Test3 = () => {
  return <ClickEvent />;
};

const RunTest = () => {
  return <Test3 />;
};

export default RunTest;

// Components must have closing tag eigther <Component /> or <Component></Component>
// Component is attached to the element with id "root" in index.html
// values are passed into props property -> generic object prop for each attribute + value given here
// ReactDOM.render(<Test3 />, document.getElementById("root"));
