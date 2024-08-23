"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

interface RoadmapItem {
  title: string
  description: string[]
  date: string
  status: "completed" | "in-progress" | "upcoming"
}

const roadmapData: RoadmapItem[] = [
  {
    title: "Launch & Initial Distribution",
    description: ["Distribute initial token supply.", "Launch PassKashToken on Binance Smart Chain.", "Begin staking and vesting programs"],
    date: "Q3 2024",
    status: "in-progress",
  },
  {
    title: "Research",
    description: ["Objective Definition", "Data Collection", "Analysis", "Reporting"],
    date: "Mid of Q3 2024",
    status: "in-progress",
  },
  {
    title: "Ecosystem Expansion",
    description: ["Integrate with PassCash financial products.", "Launch marketing campaigns in the Caribbean and beyond.", "Introduce governance features to the community."],
    date: "Q4 2024",
    status: "in-progress",
  },
  {
    title: "App Beta Test",
    description: ["Selection Criteria", "Testing Environment Setup", "Feedback Collection", "Iterative Improvement"],
    date: "Mid of Q4 2024",
    status: "in-progress",
  },
]

export default function RoadmapComponent() {
  return (
    <div id="roadmap" className="container bg-gradient-to-br from-[#000000] via-[#331029] to-[#310413] mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-10 text-center text-white">Our Roadmap</h2>
      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-gray-200 before:via-gray-400 before:to-gray-200 md:before:mx-auto md:before:left-0 md:before:right-0 md:space-y-0">
        {roadmapData.map((item, index) => (
          <div
            key={index}
            className={`relative flex items-center md:justify-center`}
          >
            <Badge
              variant={item.status === "completed" ? "default" : "secondary"}
              className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-background shadow"
            >
              {item.status === "completed" && <CheckCircle className="h-5 w-5 text-green-500" />}
              {item.status === "in-progress" && <div className="h-3 w-3 rounded-full bg-[#331029]  animate-pulse" />}
            </Badge>
            <Card className={`ml-14 md:w-5/12 border bg-gradient-to-br from-[#000000] via-[#331029] to-[#310413]  ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} shadow-lg`}>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-white">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className={`list-disc pl-5 text-gray-300 ${index % 2 !== 0 ? 'md:pl-0 md:pr-5 md:list-inside' : ''}`}>
                  {item.description.map((desc, i) => (
                    <li key={i} className="mb-1">{desc}</li>
                  ))}
                </ul>
                <p className="text-sm text-gray-400 mt-2">{item.date}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
