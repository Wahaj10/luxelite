import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Services = () => {
  const packages = [
    {
      title: "Basic Ambience",
      description: "Entry-level ambient lighting package",
      features: [
        "Single color LED strips",
        "Door panel and footwell lighting",
        "Basic controller",
      ],
    },
    {
      title: "Pro Ambience",
      description: "Advanced multi-color package",
      features: [
        "RGB LED strips with color changing",
        "Dashboard, door, and footwell lighting",
        "Smartphone app control",
      ],
    },
    {
      title: "Elite Ambience",
      description: "Premium customizable lighting",
      features: [
        "Addressable RGB LED strips",
        "Full interior coverage including trunk",
        "Advanced patterns and animations",
        "Voice control integration",
      ],
    },
    {
      title: "Luxury Ambience",
      description: "Ultimate ambient experience",
      features: [
        "Premium fiber optic lighting",
        "Custom-designed light sculptures",
        "Integration with car's infotainment",
        "Personalized lighting scenes",
      ],
    },
  ];

  return packages.map((p, pI) => (
    <Card key={pI} className="flex flex-col">
      <CardHeader>
        <CardTitle>{p.title}</CardTitle>
        <CardDescription>{p.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="list-disc list-inside space-y-2">
          {p.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Choose {p.title.split("'")[0]}</Button>
      </CardFooter>
    </Card>
  ));
};
