import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { Card, CardHeader, CardBody } from '../components/card'
import { P, BigText, SmallItalicText, InfoText, OL, LI, TextLink } from '../components/typography'
const COUNTRIES =  gql`{
    countries {
        name,
        code,
        languages {
            name,
            native,
            code,
        },
        native,
        continent {
            name,
        }
    }
}`

const Countries = () => {
    const { loading, error, data } = useQuery(COUNTRIES)

    if (loading) return (<p>Loading..</p>)
    if (error) return (<p>Sone error :\</p>)
    
    const countries = data.countries.map(country => (
        <Card key={country.code}>
            <TextLink to={`/countries/${country.code}`}>
            <CardHeader>
                <BigText>{country.name} </BigText>
                <SmallItalicText>({country.native})</SmallItalicText>
                <InfoText>{country.continent.name}</InfoText>
            </CardHeader>
            </TextLink>
            <CardBody>
                <P>Languages:</P>
                <OL>
                    {
                        country.languages.map(language => (
                            <LI key={language.code}>{language.name} <SmallItalicText>({language.native})</SmallItalicText></LI>
                        ))
                    }
                </OL>
            </CardBody>
        </Card>
    ))

    return (
        <div className="countries-container">
            {countries}
        </div>
    )
}

export default Countries