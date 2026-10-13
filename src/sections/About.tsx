import List from "../components/List";
import { skills } from "../data/skills";

function About() {
  return (
    <div
      className="relative isolate py-5 lg:py-20 lg:px-8  mt-10 lg:mt-20"
      id="about"
    >
      <div className="grid max-w-9xl mx-auto lg:gap-8 xl:gap-0 py-5 lg:py-5 lg:grid-cols-12 px-15 md:px-15 lg:px-0">
        <div className="text-left text-white mr-auto place-self-center p-6 lg:col-span-7 bg-indigo-400">
          <h5 className="text-left text-xs">About</h5>
          <p className="text-left py-5 text-xs lg:text-sm lg:tracking-tight lg:w-3/5 pt-5">
            I'm a software engineer, with a background in digital design, based
            in London. I work across the stack with a strong foundation in
            back-end development with Java and Spring Boot and building
            front-end interfaces with Javascript and React.js.
            <br /> <br />
            My design background shapes how I engineer. I combine creative
            problem-solving with a focus on user experience building for people
            who use the software, whether its a guest on their phone or a
            developer calling a API.
          </p>
        </div>

        <div className="text-left p-6 place-self-center lg:col-span-5">
          <div className="mt-10 lg:col-span-5 lg:col-start-8  xl:col-span-2 xl:col-start-11">
            <span className="text-xs">MY SKILLS</span>
            <div className="pt-5">
              <List data={skills} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
