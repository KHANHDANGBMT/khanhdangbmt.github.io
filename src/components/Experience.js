import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import './assets/css/about.css';
import 'react-tabs/style/react-tabs.css';
import './assets/css/experience.css';
import listExp from '../json/experience.json';
import {
  CheckIcon
} from './assets/icons';
import { useState } from 'react';

const Experience = () => {
  const [tabIndex, setTabIndex] = useState(2);
  const tabList = listExp.experience.map((item, index) => {
    return (
      <Tab active>
        {item.name}{' '}
        {index === listExp.experience.length - 1 ? <CheckIcon /> : ''}
      </Tab>
    );
  });

  const tabPanel = listExp.experience.map((item, index) => {
    return (
      <TabPanel tabIndex={index}>
        <p>
          <span className="date-exp">
            {item.fromDate} - {item.toDate}
          </span>
        </p>
        <p className="">{item.detail}</p>
        Project:
        {item.project.map((item) => {
          return (
            <p className="exp-project-wrapper">
              <p className="exp-project">
                <p className="text">
                  Name: <span className="text-highlight">{item.name}</span>
                </p>
                <p className="exp-project-position">
                  Position:{' '}
                  <span className="text-highlight-desc">{item.position}</span>
                </p>
                {item.teamSize ? (
                  <p className="text">
                    Team size: <span>{item.teamSize}</span>
                  </p>
                ) : (
                  ''
                )}
                <p className="exp-project-technical-wrapper">
                  Technical:{' '}
                  {item.technical.map((item) => (
                    <span className="label-custom">{item}</span>
                  ))}
                </p>
                {item.description ? (
                  <p className="text">
                    Description: <span>{item.description}</span>
                  </p>
                ) : (
                  ''
                )}
                {item.responsibility ? (
                  <p className="text">
                    Responsibility: <span>{item.responsibility}</span>
                  </p>
                ) : (
                  ''
                )}
              </p>
            </p>
          );
        })}
      </TabPanel>
    );
  });
  return (
    <div className="container experience-wrapper" id="work">
      <div className="experience">
        <h3 className="numbered-heading">
          <span className="number-head">02.</span>
          Experience
        </h3>
        <div className="tab-list-wrapper">
          <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>{tabList}</TabList>
            {tabPanel}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Experience;
