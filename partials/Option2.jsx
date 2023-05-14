import { Disclosure } from '@headlessui/react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const Sub_Nav_Items = [
  {
    description:
      "A disciple of the Buddha shall not himself kill, encourage others to kill, kill by expedient means, praise killing, rejoice at witnessing killing, or kill through incantation or deviant mantras. He must not create the causes, conditions, methods, or karma of killing, and shall not intentionally kill any living creature. As a Buddha's disciple, he ought to nurture a mind of compassion and filial piety, always devising expedient means to rescue and protect all beings. If instead, he fails to restrain himself and kills sentient beings without mercy, he commits a Parajika (major) offense.",
  },
  {
    description:
      "A disciple of the Buddha must not himself steal or encourage others to steal, steal by expedient means, steal by means of incantation or deviant mantras. He should not create the causes, conditions, methods, or karma of stealing. No valuables or possessions, even those belonging to ghosts and spirits or thieves and robbers, be they as small as a needle or blade of grass, may be stolen. As a Buddha's disciple, he ought to have a mind of mercy, compassion, and filial piety -- always helping people earn merits and achieve happiness. If instead, he steals the possessions of others, he commits a Parajika offense.",
  },
  {
    description:
      "A disciple of the Buddha must not himself steal or encourage others to steal, steal by expedient means, steal by means of incantation or deviant mantras. He should not create the causes, conditions, methods, or karma of stealing. No valuables or possessions, even those belonging to ghosts and spirits or thieves and robbers, be they as small as a needle or blade of grass, may be stolen. As a Buddha's disciple, he ought to have a mind of mercy, compassion, and filial piety -- always helping people earn merits and achieve happiness. If instead, he steals the possessions of others, he commits a Parajika offense.",
  },
  {
    description:
      "A disciple of the Buddha must not himself steal or encourage others to steal, steal by expedient means, steal by means of incantation or deviant mantras. He should not create the causes, conditions, methods, or karma of stealing. No valuables or possessions, even those belonging to ghosts and spirits or thieves and robbers, be they as small as a needle or blade of grass, may be stolen. As a Buddha's disciple, he ought to have a mind of mercy, compassion, and filial piety -- always helping people earn merits and achieve happiness. If instead, he steals the possessions of others, he commits a Parajika offense.",
  },
  {
    description:
      "A disciple of the Buddha must not himself steal or encourage others to steal, steal by expedient means, steal by means of incantation or deviant mantras. He should not create the causes, conditions, methods, or karma of stealing. No valuables or possessions, even those belonging to ghosts and spirits or thieves and robbers, be they as small as a needle or blade of grass, may be stolen. As a Buddha's disciple, he ought to have a mind of mercy, compassion, and filial piety -- always helping people earn merits and achieve happiness. If instead, he steals the possessions of others, he commits a Parajika offense.",
  },
  {
    description:
      "A disciple of the Buddha must not himself steal or encourage others to steal, steal by expedient means, steal by means of incantation or deviant mantras. He should not create the causes, conditions, methods, or karma of stealing. No valuables or possessions, even those belonging to ghosts and spirits or thieves and robbers, be they as small as a needle or blade of grass, may be stolen. As a Buddha's disciple, he ought to have a mind of mercy, compassion, and filial piety -- always helping people earn merits and achieve happiness. If instead, he steals the possessions of others, he commits a Parajika offense.",
  },
  {
    description:
      "A disciple of the Buddha must not himself steal or encourage others to steal, steal by expedient means, steal by means of incantation or deviant mantras. He should not create the causes, conditions, methods, or karma of stealing. No valuables or possessions, even those belonging to ghosts and spirits or thieves and robbers, be they as small as a needle or blade of grass, may be stolen. As a Buddha's disciple, he ought to have a mind of mercy, compassion, and filial piety -- always helping people earn merits and achieve happiness. If instead, he steals the possessions of others, he commits a Parajika offense.",
  },
  {
    description:
      "A disciple of the Buddha must not himself steal or encourage others to steal, steal by expedient means, steal by means of incantation or deviant mantras. He should not create the causes, conditions, methods, or karma of stealing. No valuables or possessions, even those belonging to ghosts and spirits or thieves and robbers, be they as small as a needle or blade of grass, may be stolen. As a Buddha's disciple, he ought to have a mind of mercy, compassion, and filial piety -- always helping people earn merits and achieve happiness. If instead, he steals the possessions of others, he commits a Parajika offense.",
  },
  {
    description:
      "A disciple of the Buddha must not himself steal or encourage others to steal, steal by expedient means, steal by means of incantation or deviant mantras. He should not create the causes, conditions, methods, or karma of stealing. No valuables or possessions, even those belonging to ghosts and spirits or thieves and robbers, be they as small as a needle or blade of grass, may be stolen. As a Buddha's disciple, he ought to have a mind of mercy, compassion, and filial piety -- always helping people earn merits and achieve happiness. If instead, he steals the possessions of others, he commits a Parajika offense.",
  },
  {
    description:
      "A disciple of the Buddha must not himself steal or encourage others to steal, steal by expedient means, steal by means of incantation or deviant mantras. He should not create the causes, conditions, methods, or karma of stealing. No valuables or possessions, even those belonging to ghosts and spirits or thieves and robbers, be they as small as a needle or blade of grass, may be stolen. As a Buddha's disciple, he ought to have a mind of mercy, compassion, and filial piety -- always helping people earn merits and achieve happiness. If instead, he steals the possessions of others, he commits a Parajika offense.",
  },
];

export default function Option2() {
  return (
    <Disclosure className='mt-4'>
      {({ open }) => (
        <>
          <Disclosure.Button className='flex items-center mb-3 gap-y-1'>
            <div>{open ? <FaAngleUp /> : <FaAngleDown />}</div>
            <div>
              Toggle To Drop Down The Longer Form Versions Of These 10 Precepts
            </div>
          </Disclosure.Button>
          <Disclosure.Panel>
            <ul className='pl-6 list-decimal'>
              {Sub_Nav_Items.map((sub_nav_items, index) => (
                <div className='pt-5 text-sm mb-3' key={index}>
                  <li className='text-gray-500'>{sub_nav_items.description}</li>
                </div>
              ))}
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
