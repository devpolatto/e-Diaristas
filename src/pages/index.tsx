import SafeEnvireonment from 'ui/components/FeedBack/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle';
import UserInformation from 'ui/components/UserInformation';
import TextFieldMask from 'ui/components/inputs/TextFieldMask';
import { Button, Typography, Container, CircularProgress } from '@material-ui/core';

import useIndex from 'data/hooks/pages/useIndex.page';

import { FormElementsContainer, ProfissionaisContainer, ProfissionaisPaper } from 'ui/styles/pages/index.style';

export default function Home() {

  const {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes
  } = useIndex();

  return (
    <>
      <SafeEnvireonment />
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
      />

      <Container>
        <FormElementsContainer>
          <TextFieldMask variant={'outlined'}
            mask={'99.999-999'}
            label={'Digite seu CEP'}
            fullWidth
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />

          {erro && <Typography color={'error'}> {erro} </Typography>}

          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px' }}
            disabled={!cepValido || carregando}
            onClick={() => buscarProfissionais(cep)}
          >
            {carregando ? <CircularProgress size={20} /> : 'Buscar'}
          </Button>

        </FormElementsContainer>
        {buscaFeita && (diaristas.length > 0 ?
          <ProfissionaisPaper>
            <ProfissionaisContainer>

              {diaristas.map((diarista, index) => {
                return (
                  <UserInformation
                    key={index}
                    name={diarista.nome_completo}
                    description={diarista.cidade}
                    rating={diarista.reputacao}
                  />
                );
              })}

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
              <UserInformation
                name={'sandra'}
                description={'São Paulo'}
                rating={4}
              />
            </ProfissionaisContainer>

            <Container sx={{ textAlign: 'center' }}>
              {diaristasRestantes > 0 && (
                <Typography sx={{ mt: 5 }}>
                  ...e mais {diaristasRestantes} {' '}
                  {diaristasRestantes > 1
                    ? 'profissionais atendem'
                    : 'profissional atende'
                  } {' '}ao seu endereço
                </Typography>
              )}

              <Button
                variant={'contained'}
                color={'secondary'}
                sx={{ mt: 5 }}
              >
                Contratar um profissional
              </Button>
            </Container>
          </ProfissionaisPaper>

          :

          (
            <Typography align={'center'} color={'textPrimary'}>
              Ainda não temos nenhu,a disrista disponíve
              em sua região
            </Typography>
          )
        )}
        <FormElementsContainer />
      </Container>
    </>
  );
}
