import { _jobProps } from "../components/job/jobItem";
import { _scheduleProps } from "../components/schedule/scheduleItem";

const schedules: _scheduleProps[] = [
  {
    date: new Date("7/10/2022, 1:18:03 PM"),
    invite: "Carl Max",
    title: "React Native Developer",
  },
];

const jobs: _jobProps[] = [
  {
    applicants: 23,
    dateCreated: new Date(),
    id: Math.random().toString(),
    status: "Open",
    tags: ["React Js", "Angular", "Animation"],
    title: "Junior Developer",
  },
  {
    applicants: 12,
    dateCreated: new Date("7/10/2022, 1:18:03 PM"),
    id: Math.random().toString(),
    status: "Closed",
    tags: ["UX Design", "Design"],
    title: "UI Designer",
  },
  {
    applicants: 16,
    dateCreated: new Date(),
    id: Math.random().toString(),
    status: "Open",
    tags: ["Blender", "Cinema 4d", "Animation"],
    title: "3d Designer",
  },
  {
    applicants: 4,
    dateCreated: new Date("5/14/2022, 1:18:03 PM"),
    id: Math.random().toString(),
    status: "Open",
    tags: ["Motion Designer", "Animation"],
    title: "Animator",
  },
];

const tagStats: string[] = [
  "React Js",
  "Angular",
  "UI",
  "Graphics",
  "Animation",
  "TailwindCSS",
  "Express.js",
  "React Native",
  "Node",
];

export { schedules, jobs, tagStats };
