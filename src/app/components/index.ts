import {VoteChildModule} from './vote-child/vote-child.module';
import { HomeChildModule } from './home-child/home-child.module';
import { SubjectChildModule } from './subject-child/subject-child.module';


export {
  VoteChildModule,
  HomeChildModule,
  SubjectChildModule
}

const components = [
  VoteChildModule,
  HomeChildModule,
  SubjectChildModule
]

export default components
