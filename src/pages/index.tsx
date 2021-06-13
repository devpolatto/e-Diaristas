import SafeEnvireonment from 'ui/components/FeedBack/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle';
import UserInformation from 'ui/components/UserInformation';

export default function Home() {
  return (
    <>
      <SafeEnvireonment />
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
      />
      <UserInformation
        name={'cristina'}
        description={'São Paulo'}
        rating={4}
      />
      <UserInformation
        name={'talia'}
        description={'São Paulo'}
        rating={4}
      />
      <UserInformation
        name={'sandra'}
        description={'São Paulo'}
        rating={4}
      />
    </>
  );
}
