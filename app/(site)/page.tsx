import { getProjects } from "@/sanity/sanity-utils"
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const projects = await getProjects();
  return (
   <div>
    
    <h1 className="text-7xl font-extrabold"> Hello I&apos;m <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">ohis</span></h1>
    <p className="mt-3 text-xl text-gray-600">Holla everyone! Check out my projects!</p>
    <h2 className="mt-24 font-bold text-gray-700 text-3xl">my projects</h2>

  <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{projects.map((project) => (
<Link className="" key={project._id} href={`/projects/${project.slug}`}>
  {project.image && (
    <Image
     src={project.image}
     alt={project.name}
     width={750}
     height={0}
     className="object-cover h-64"
     />
  )}

  <div className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to -purple-600 bg-clip-text text-transparent">{project.name}</div></Link>
))}
</div>
   </div>
  )
}

