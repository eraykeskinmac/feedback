import FeedbackWidget from '@upstash/feedback'

export default function IndexPage() {
  return (
    <div className="p-10">
      <pre className="mb-4">
        {`
<FeedbackWidget>
  <button>Feedback</button>
</FeedbackWidget>`}
      </pre>
      <FeedbackWidget>
        <button className="py-1 px-2 bg-gray-300 rounded">Feedback</button>
      </FeedbackWidget>
      {/**/}
      {/**/}
      <hr className="my-10" />
      {/**/}
      {/**/}
      <pre className="mb-4">
        {`
<FeedbackWidget
  type="full"
  user="steve.jobs@apple.com"
>
  <button>Feedback</button>
</FeedbackWidget>`}
      </pre>
      <FeedbackWidget type="full" user="steve.jobs@apple.com">
        <button className="py-1 px-2 bg-gray-300 rounded">Feedback</button>
      </FeedbackWidget>
      {/**/}
      {/**/}
      <hr className="my-10" />
      {/**/}
      {/**/}
      <pre className="mb-4">
        {`
<FeedbackWidget
  type="rate"
  user="steve.jobs@apple.com"
  metadata={{ location: 'Palo Alto' }}
>
  <button>Feedback</button>
</FeedbackWidget>`}
      </pre>
      <FeedbackWidget
        type="rate"
        user="steve.jobs@apple.com"
        metadata={{ location: 'Palo Alto' }}
      >
        <button className="py-1 px-2 bg-gray-300 rounded">Feedback</button>
      </FeedbackWidget>
    </div>
  )
}