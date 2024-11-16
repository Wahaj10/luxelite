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
      title: "Ambient Essentials",
      description: "Front End lighting package",
      features: ["Dash Ambient Lighting", "Front Footwell Lights"],
    },
    {
      title: "Radiant Package",
      description: "Front End Plus Front Door Panels",
      features: [
        "Dash Ambient Lighting",
        "Front Door Light Strips",
        "Front Footwell Lights",
      ],
    },
    {
      title: "Radiant Plus",
      description: "All Around Lighting Package",
      features: [
        "Dash Ambient Lighting",
        "All Door Light Strips",
        "Front and Back Footwell Lights",
      ],
    },
    {
      title: "Ultimate Atmosphere",
      description: "All Around Lighting With Ad-ons",
      features: [
        "Dash Ambient Lighting",
        "All Door Light Strips",
        "All Door Speaker Lights",
        "All Door Storage Lights",
        "All Door Handle  Lights",
        "Front and Back Footwell Lights",
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
