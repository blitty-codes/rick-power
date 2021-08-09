import React from 'react';
import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';

import { getFullDataByID } from '../apollo/queries';
import Client from '../apollo/apollo';
import Card from '../components/card';
import Episode from '../components/episode';
import CustomDate from '../components/date';
import CustomError from '../components/customError';
import Loader from '../components/loader';

const CharInfo = () => {
  const idC = useParams().id;

  const { loading, error, data } = useQuery(getFullDataByID, {
    variables: { id: idC },
    client: Client,
  });

  if (loading) return (
    <div className="text-gray-800 mt-60 mb-20">
      <Loader />
    </div>
  );
  if (error) return <CustomError />;

  const {
    name,
    status,
    species,
    type,
    gender,
    location,
    image,
    episode,
    created,
  } = data.character;

  return (
    <main>
      <nav className="w-max">
        <Link to='/'>
          <h3 className="text-3xl m-4 text-blue-700 underline">
            {'< '} Back
          </h3>
        </Link>
      </nav>
      <section className="mt-8">
        <img className="rounded-full m-auto" src={image} />
        <h1 className="text-3xl text-center mt-2">
          {name} - ({idC})
        </h1>
        <p className="italic text-center font-extralight text-gray-600">Created: {new Date(created).toString()}</p>
        <div>
          <table className="m-auto mt-4 mb-4 bg-green-300 border-4 rounded-md border-gray-800 table-fixed">
            <tbody>
              <tr className="border-2 border-gray-600">
                <th className="pt-1 pl-2 w-1/2 text-left">Type</th>
                <td className="pr-4 w-1/2 text-center">{type === '' ? '-' : type}</td>
              </tr>
              <tr className="border-2 border-gray-600">
                <th className="pr-4 pl-2 w-1/2 text-left">Gender</th>
                <td className="pr-4 w-1/2 text-center">{(gender === 'Female') ? '♀️' : (gender === 'Male') ? '♂️' : '❓'} {gender}</td>
              </tr>
              <tr className="border-2 border-gray-600">
                <th className="pr-4	pl-2 w-1/2 text-left">Status</th>
                <td className="pr-4 w-1/2 text-center">{status === 'Alive' ? '🟢' : status === 'unknown' ? '❓' : '🔴'} {status}</td>
              </tr>
              <tr className="border-2 border-gray-600">
                <th className="pb-1 pl-2 w-1/2 text-left">Species</th>
                <td className="pr-4 w-1/2 text-center">{species}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <hr />
      <section>
        <h2 className="text-center font-bold text-2xl pb-3 pt-2">Episodes</h2>
        <div className="p-2 m-auto items-center grid grid-flow-col grid-rows-2 gap-4 overflow-auto">
          {episode.map(({ id, name, episode, created }) => (
              <Episode
                key={id}
                id={id}
                name={name}
                episode={episode}
                created={created}
              />
            ))
          }
        </div>
      </section>
      <hr />
      <section>
        <h2 className="text-center font-bold text-2xl pb-3 pt-2">Location</h2>
        <div className="m-auto w-max p-4 rounded-md bg-blue-100">
          <h4 className="text-center text-xl font-bold underline pb-2">{location.name}</h4>
          <p className="text-center text-base text-gray-800">Type: {location.type}</p>
          <p className="text-center text-base text-gray-800">Dimension: {location.dimension}</p>
          <CustomDate date={new Date(location.created)} />
        </div>
        <div>
          <h3 className="text-center font-bold text-xl pb-3 pt-2">Residents</h3>
          <div className="p-2 m-auto items-center grid grid-flow-col grid-rows-2 gap-4 overflow-auto">
            {location.residents.length !== 1 ? (
              location.residents.map(({ id, name, gender, status, image }) => {
                if (idC !== id)
                  return (
                    <Card
                      key={id}
                      id={id}
                      name={name}
                      gender={gender}
                      status={status}
                      image={image}
                    />
                  );
              })
            ) : (
              <p className="text-center font-bold text-gray-500">Nothing found!</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CharInfo;
