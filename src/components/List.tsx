interface ListProps {
  data: any;
}

function List({ data }: ListProps) {
  return (
    <>
      <ul className="flex w-fit flex-wrap text-n-04 lg:block mt-2 backdrop-blur-md border border-black">
        {data.map((list: any, index: number) => (
          <li
            key={index}
            className="relative min-w-62.5 p-3 lg:min-w-auto outline"
          >
            <span className="text-xs text-left text-black w-2/5">
              {list.title}
            </span>
            <div className="flex flex-col lg:block lg:max-h-auto ">
              <div className="bg-linear-to-r from-fuchsia-400 to-indigo-600 bg-clip-text text-transparent justify-between space-x-6. pt-1 grid-cols-12">
                {list.bullets.map((skill: any, index: number) => (
                  <span
                    className="text-xs text-right"
                    key={index}
                  >{`${skill} / `}</span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
