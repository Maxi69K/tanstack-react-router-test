import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/posts/$Id')({
  component: PostComponent,
});

function PostComponent() {
  const { Id } = Route.useParams();
  console.log({Id});
  return <div>Post Id: {Id}</div>;
}
