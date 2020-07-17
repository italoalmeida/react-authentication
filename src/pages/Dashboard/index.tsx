import React from 'react';
import { Container, Content, ButtonGroup, Title } from './styles';
import Button from '../../components/Button';

const Dashboard = () => {
  const onSignout = () => console.log('Signed out');

  return (
    <Container>
      <Content>
        <Title>You're signed in</Title>
        <ButtonGroup>
          <Button onClick={onSignout}>Sign Out</Button>
        </ButtonGroup>
      </Content>
    </Container>
  );
};

export default Dashboard;
