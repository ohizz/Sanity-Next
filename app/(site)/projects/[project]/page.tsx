import getProject from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from 'next/image'

type Props = {
 params: {project: string}
};

export default async function project({params}: Props) {
 const slug = params.project;
 const project = await getProject(slug)

 return <div>
 <header className="flex justify-between items-center">
  <a href="/" title="" rel="noopener noreferrer" className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap">←</a>
  <h1>{project.name}</h1>
 </header>
 <div>
  <Image
  src={project.image}
  alt={project.name}
  width={700}
  height={300}
  className="object-cover my-10 rounded-lg "/>
  <PortableText value={project.content}/>
 </div>
 </div>
}