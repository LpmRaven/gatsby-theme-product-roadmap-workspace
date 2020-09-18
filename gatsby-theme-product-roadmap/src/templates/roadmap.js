import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from '../components/layout';
import './roadmap.scss';


const RoadmapTemplate = () => {
    const data = useStaticQuery(graphql`
        query {
            allRoadmapEvent(sort: { fields: startDate, order: ASC }) {
                nodes {
                    id
                    title
                    content
                    startDate(formatString: "MMM YYYY")
                    url
                }
            }
        }
    `);
    const roadmapEvents = data.allRoadmapEvent.nodes;

    if (roadmapEvents) {
        return (
            <Layout>
                <div className="c-roadmap-event">
                    <ol className="c-roadmap-event__ol c-roadmap-event__flex-container">
                        {roadmapEvents.map((roadmapEvent) => {
                            const start = new Date(roadmapEvent.startDate)

                            return (
                                <li className="c-roadmap-event__li c-roadmap-event-li c-roadmap-event__flex-item c-roadmap-event-li__flex-container">
                                    <div className="svg-wrapper c-roadmap-event-li__flex-item">
                                        <div className="svg-container">
                                            <svg viewBox="0 0 500 300" preserveAspectRatio="none">
                                                <g>
                                                    <path></path>
                                                    <path></path>
                                                    <circle></circle>
                                                    <circle></circle>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="c-roadmap-event-li__flex-item c-roadmap-content__flex-container">
                                        <time className="c-roadmap-content__flex-item" dateTime={start.toISOString()}>{roadmapEvent.startDate}</time>
                                        <div className="c-roadmap-content__flex-item">
                                            <p>{roadmapEvent.title}</p>
                                            <p>{roadmapEvent.content}</p>
                                        </div>

                                    </div>
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </Layout>
        )
    }
}

export default RoadmapTemplate;