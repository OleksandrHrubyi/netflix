import MainLayout from 'components/MainLayout/MainLayout'
import MainForm from 'components/MainForm/MainForm'
import InfoSection from 'components/InfoSection/InfoSection'
import DownloadSection from 'components/DownloadSection/DownloadSection'
import KidSection from 'components/KidSection/KidSection'
import QuestionSection from 'components/QuestionSection/QuestionSection'

function Home() {
  return (
    <MainLayout main>
      <InfoSection />
      <DownloadSection />
      <KidSection />
      <QuestionSection />
      <MainForm />
    </MainLayout>
  )
}

export default Home
