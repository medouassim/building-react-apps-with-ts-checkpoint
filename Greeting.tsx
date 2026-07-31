// Define an interface to type-check the props this component receives
interface GreetingProps {
  name: string;
}

// Type the props directly on the function parameter instead of using React.FC
function Greeting({ name }: GreetingProps) {
  return <div>Hello, {name}!</div>;
}

export default Greeting;