import React from 'react';
import { Container, Content, ButtonGroup, Title } from './styles';
import Button from '../../components/Button';
import { useAuth } from '../../context/AuthContext';

const Dashboard = () => {
  const { signOut } = useAuth();

  const onSignOut = () => signOut();

  return (
    <Container>
      <Content>
        <Title>You're signed in</Title>
        <ButtonGroup>
          <Button onClick={onSignOut}>Sign Out</Button>
        </ButtonGroup>
      </Content>
    </Container>
  );
};

export default Dashboard;
