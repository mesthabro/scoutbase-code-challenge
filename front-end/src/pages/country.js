import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { Card, CardHeader, CardBody } from '../components/card'
import { P, BigText, SmallItalicText, InfoText, OL, LI, TextLink } from '../components/typography'

const getCountryInfo = (code) => gql`{
    country (code: "${code}") {
        name,
        code,
        currency,
        continent {
            name
        }
        native,
        languages {
            code,
            name,
            native
        }
        phone
    }
}
`

const Country = ({ match }) => {
    const countryCode = match.params.code
    const { loading, error, data } = useQuery(getCountryInfo(countryCode))

    if (loading) return (<p>Loading..</p>)
    if (error) return (<p>Sone error :\</p>)

    return (
        <>
            <p><TextLink to="/countries" color="#3e64ff">&lt; Back to Countries list</TextLink></p>
            <Card>
                <CardHeader>
                    <BigText>{data.country.name} </BigText>
                    <SmallItalicText>({data.country.native})</SmallItalicText>
                    <InfoText>{data.country.continent.name}</InfoText>
                </CardHeader>
                <CardBody>
                    <P>Currency: {data.country.currency}</P>
                    <P>Area Code: {data.country.phone}</P>
                    <P>Languages:</P>
                    <OL>
                        {
                            data.country.languages.map(language => (
                                <LI key={language.code}>{language.name} <SmallItalicText>({language.native})</SmallItalicText></LI>
                            ))
                        }
                    </OL>
                </CardBody>
            </Card>
        </>
    )
}

export default Country