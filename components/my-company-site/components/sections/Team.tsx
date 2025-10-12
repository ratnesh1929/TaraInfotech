import React from 'react';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO',
    bio: 'John has over 20 years of experience in the tech industry and leads the company with a vision for innovation.',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    bio: 'Jane is a tech enthusiast with a passion for developing cutting-edge solutions and overseeing the tech team.',
  },
  {
    name: 'Alice Johnson',
    role: 'Marketing Manager',
    bio: 'Alice brings a wealth of experience in marketing and is responsible for driving the company’s brand strategy.',
  },
];

export const Team: React.FC = () => {
  return (
    <section>
      <h2>Meet Our Team</h2>
      <div>
        {teamMembers.map((member, index) => (
          <div key={index}>
            <h3>{member.name}</h3>
            <p><strong>Role:</strong> {member.role}</p>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};