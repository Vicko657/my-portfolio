import Button from "../components/Button";

interface ProjectProps {
  work: any;
  index: number;
  height: string;
  style: string;
}

function ProjectCard({ work, index, height, style }: ProjectProps) {
  return (
    <div className={`text-left outline lg:${height} ${style}`}>
      <div className="relative text-right">
        {work.img != undefined ? (
          <img
            className="w-full h-30 lg:h-auto pb-2 object-cover"
            src={`/images/${work.img?.src}.png`}
          />
        ) : null}
        <div className="w-full absolute top-0 left-0 p-2 ">
          {work.metrics != undefined
            ? work.metrics?.map((metric: string) => (
                <span
                  className="text-white text-xs outline bg-zinc-950 mr-1 p-0.5"
                  key={work.title}
                >
                  {`${metric}`}
                </span>
              ))
            : null}
        </div>
      </div>

      <div className="px-6 lg:px-8 py-6 lg:py-3">
        <h6 className="text-xs">{`0${index + 1}`}</h6>

        <h3 className="pb-1 font-semibold lowercase text-2xl">{work.title}</h3>

        <div className="pb-3 bg-linear-to-r from-fuchsia-400 to-indigo-600 bg-clip-text text-transparent">
          {work.stack?.map((tech: string) => (
            <span className=" text-xs" key={work.title}>
              {`${tech} / `}
            </span>
          ))}
        </div>

        <p className="text-xs">{work?.summary}</p>

        <div className="mt-5 flex items-left justify-left gap-x-2">
          {work.links?.map((link: any, index: number) => (
            <Button
              key={index}
              url={link.url}
              text={link.label}
              type={link.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
