import React from 'react';
import * as S from './styles';
import { team } from '../../../utils/team';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const TeamMembers = (): JSX.Element => {
  return (
    <S.TeamMembersContainer>
      {team.map((member) => (
        <S.TeamMemberCard key={member.id}>
          <figure>
            <img src={member.src} alt={member.name} />
          </figure>

          <ul>
            <li>
              <a href="">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="">
                <FaLinkedin />
              </a>
            </li>
          </ul>

          <div>
            <h3>{member.name}</h3>
            <span>{member.occupation}</span>
          </div>
        </S.TeamMemberCard>
      ))}
    </S.TeamMembersContainer>
  );
};
