import React from 'react';
import style from './default-sections.scss';

const Skills = ({ skills }) =>
    skills.length > 0 && (
        <div className={style['resume-skills']}>
            <h4>Skills</h4>
            <ul>
                {skills.map((skill) => {
                    if (skill.enabled) {
                        const { name, level, keywords } = skill.value;
                        return (
                            <li>
                                <p className={style['resume-skills--title']}>
                                    {name && name.enabled && name.value}{', '}
                                    {level && level.enabled && level.value}
                                </p>
                                {keywords && keywords.enabled && (
                                    <ul className={style['resume-skills--keywords']}>
                                        {keywords.value.map((keyword) =>
                                            keywords.enabled && <li>{keyword.value}</li>)
                                        }
                                    </ul>
                                )}
                            </li>
                        );
                    }

                    return null;
                })}
            </ul>
        </div>
    );

export default Skills;
