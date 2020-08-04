import { BurnerPluginContext, Plugin, Actions } from '@burner-wallet/types';
import MyPage from './ui/MyPage';
import NFTList from './ui/NFTList';
import certificate1 from '../images/certificate1.png';
import certificate2 from '../images/certificate2.png';
import course1 from '../images/course1.png';
import course2 from '../images/course2.png';
import exam1 from '../images/exam1.png';
import exam2 from '../images/exam2.png';

export interface NFT {
  id: string;
  image: string;
  title: string;
  category: string;
}

const mockNFTs: NFT[] = [
  {
    id: '0x01',
    image: certificate1,
    title: 'Certificate 1',
    category: 'Certificate',
  },
  {
    id: '0x02',
    image: certificate2,
    title: 'Certificate 2',
    category: 'Certificate',
  },
  {
    id: '0x03',
    image: exam1,
    title: 'Exam 1',
    category: 'Exam',
  },
  {
    id: '0x04',
    image: exam2,
    title: 'Exam 2',
    category: 'Exam',
  },
  {
    id: '0x05',
    image: course1,
    title: 'Course 1',
    category: 'Course',
  },
  {
    id: '0x06',
    image: course2,
    title: 'Course 2',
    category: 'Course',
  },
];

interface PluginActionContext {
  actions: Actions;
}

export default class SkilltreePlugin implements Plugin {
  private pluginContext?: BurnerPluginContext;

  initializePlugin(pluginContext: BurnerPluginContext) {
    this.pluginContext = pluginContext;

    pluginContext.addPage('/my-page', MyPage);
    pluginContext.addElement('home-middle', NFTList);

    pluginContext.onQRScanned((scannedQR: string, ctx: PluginActionContext) => {
      if (scannedQR === 'My Plugin') {
        ctx.actions.navigateTo('/my-page');
        return true;
      }
    });
  }

  async getNFTList(_account: string): Promise<NFT[]> {
    return mockNFTs;
  }
}
