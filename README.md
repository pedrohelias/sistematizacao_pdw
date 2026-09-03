# sistematizacao_pdw

Foobar is a Python library for dealing with word pluralization.

## Sobre a API

Com o uso da API é possível: 

- Listar todos os profissionais e suas especialidades; 
- Filtrar a busca de profissionais pelo nome;
- Filtrar a busca por especialidade;
- Listar disponibilidade específica por profissional (Adicional);
- Adição de Paciente (Adicional); 
- Agendar um exame (Adicional);
- Listar os exames de cada paciente (Adicional);

## Instalação

Em caso de uso local

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.



```bash
pip install foobar
```

## Uso

```python
import foobar

# returns 'words'
foobar.pluralize('word')

# returns 'geese'
foobar.pluralize('goose')

# returns 'phenomenon'
foobar.singularize('phenomena')
```

## Contribuição

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Licença

[MIT](https://choosealicense.com/licenses/mit/)