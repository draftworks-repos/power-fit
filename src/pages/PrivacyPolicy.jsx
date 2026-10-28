import usePageMetadata from "../hooks/usePageMetadata";
import LegalPageLayout from "../components/LegalPageLayout";

export default function PrivacyPolicy() {
  usePageMetadata({
    title: "Privacy Policy | POWER FIT",
    description:
      "Read the POWER FIT privacy policy and learn how website enquiries and technical information are handled.",
  });
  return (
    <LegalPageLayout title="Privacy Policy">
      <p>
        <strong className="text-white">Last updated:</strong> October 24, 2026
      </p>

      <section>
        <h2 className="mb-3 text-xl font-bold text-white">
          Information We Collect
        </h2>
        <p>
          The current website does not store enquiry form submissions in a
          website database. If you use the enquiry form, your email application
          may open with a prepared message. You choose whether to send it.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-white">
          Third-Party Services
        </h2>
        <p>
          The website may load images and other resources from third-party
          providers. Those providers may process technical information when your
          browser requests their resources.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-white">Information Usage</h2>
        <p>
          Information sent directly to the gym may be used to respond to
          enquiries. Actual data handling and retention practices should be
          reflected in this policy before publication.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-white">Contact</h2>
        <p>
          For privacy-related questions, contact the gym using its official
          business contact details.
        </p>
      </section>
    </LegalPageLayout>
  );
}
