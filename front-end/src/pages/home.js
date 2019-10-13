import React from 'react'
import { TextLink, P } from '../components/typography'

const Home = () => (
    <>
        <P>Let us checkout some countries Shall we?</P>
        <TextLink to="/countries" color="#fafafa" fill="#000" big="true" btn="true">View Countries</TextLink>
    </>
)

export default Home