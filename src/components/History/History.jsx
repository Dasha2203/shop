import React from 'react';
import Section from "../Section/Section";
import HistoryCard from "./HistoryCard";

const History = () => {
    return (
        <Section title={'Вы смотрели'} >
            <HistoryCard/>
        </Section>
    );
};

export default History;