export const CommentSection: React.FC = () => {
  const comments: { id: number, user: { name: string, profilePicture: string }, text: string }[] = [
    {
      id: 1,
      user: {
        name: 'James',
        profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
      text: 'Wow!',
    },
    {
      id: 2,
      user: {
        name: 'Jane',
        profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
      text: 'Amazing!',
    },
    {
      id: 3,
      user: {
        name: 'Jay',
        profilePicture: 'https://randomuser.me/api/portraits/men/3.jpg',
      },
      text: 'Good work!',
    },
  ];

  return (
    <div className="mx-auto max-w-[350px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] mt-8" >
      {
        comments.map((comment) => (
          <div key={comment.id} className="flex items-start mb-4" >
            <div className="w-10 h-10 rounded-full overflow-hidden mr-2" >
              <img
                src={comment.user.profilePicture}
                alt={`${comment.user.name}'s profile`}
                className="w-full h-full object-cover"
              />
            </div>
            < div >
              <p className="font-semibold text-[rgb(0,128,128)]" > {comment.user.name} </p>
              <p className="text-gray-600" > {comment.text} </p>
            </div>
          </div>
        ))}
    </div>
  );
};

