import {Card} from "@heroui/react";
export default function Showtask({item}) {
  return (
    <div>

         <Card className="w-[320px]" variant="tertiary">
        <Card.Header>
          <Card.Title>{item.title}</Card.Title>
          <Card.Description>{item.description}</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>status :{item.status}</p>
          <p>priority :{item.priority}</p>
        </Card.Content>
      </Card>
    </div>
  )
}
