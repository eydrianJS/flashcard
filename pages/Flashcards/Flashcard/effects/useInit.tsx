import React from 'react';

const useInit = () => {
  // Pokazanie ze to zla odpowiedz
  const badAnswer = {
    title: `I don't know!`,
    style: {
      label: {
        backgroundColor: 'red',
        color: 'white',
        fontSize: 24,
      },
      wrapper: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginTop: 20,
        marginLeft: -20,
      },
    },
  };

  const goodAnswer = {
    // Pokazanie ze to dobra odpowiedz
    title: 'I know!',
    style: {
      label: {
        backgroundColor: 'green',
        color: 'white',
        fontSize: 24,
      },
      wrapper: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 20,
        marginLeft: 20,
      },
    },
  };

  return { badAnswer, goodAnswer };
};

export default useInit;
