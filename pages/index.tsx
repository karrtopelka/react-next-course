import { Button, Htag } from '../components';

const Home = (): JSX.Element => {
  return (
    <div>
      <Htag tag="h3">hello</Htag>
      <Button appearance='primary'>Test simple button</Button>
      <Button appearance='secondary'>Test simple button</Button>
    </div>
  );
};

export default Home;
