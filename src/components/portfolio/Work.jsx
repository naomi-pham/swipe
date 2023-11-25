import { projects } from './constants';
import GradientWrapper from './wrapper/GradientWrapper';
import { IconArrowLong } from '../common/Icons';

const Work = () => {
  return (
    <section className='container mx-auto mt-20 xl:mt-32'>
      <h2 className='mb-10 text-4xl font-bold'>My Work</h2>

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
        {projects.map((item) => (
          <GradientWrapper key={item.id}>
            <div className='space-y-4'>
              <h3 className='text-2xl font-semibold'>{item.title}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Quis vitae ac dictum ut
                neque sed nisl. Felis orci proin interdum malesuada egestas. A
                etiam tincidunt et ac ultrices urna aenean scelerisque. Pharetra
                eu cursus ultricies ornare sed.
              </p>
              <button
                type='button'
                className='inline-flex items-center gap-2 font-medium'
              >
                See more
                <i>
                  <IconArrowLong />
                </i>
              </button>
            </div>
          </GradientWrapper>
        ))}
      </div>
    </section>
  );
};

export default Work;
