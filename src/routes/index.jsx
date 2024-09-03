import { createFileRoute } from '@tanstack/react-router'
import HomePages from '../pages/HomePages';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  return <HomePages />
}