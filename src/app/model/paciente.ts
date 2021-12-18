import { Convenio } from "./Convenio"
import { Uf } from "./Uf"


export class Paciente{

  public IDPACIENTE: number
  public IDCONVENIO: Convenio
  public PRONTUARIO : string
  public NOME: string
  public SOBRENOME: string
  public DATANASCIMENTO: Date
  public SEXO: string
  public CPF: number
  public RG: string
  public uf: Uf
  public EMAIL: string
  public CELULAR: number
  public TELEFONE: number
  public CARTEIRINHA: number
  public VALIDADECARTEIRINHA: Date
  public ATIVO: boolean






}
