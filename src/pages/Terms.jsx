import usePageMetadata from "../hooks/usePageMetadata";
import LegalPageLayout from "../components/LegalPageLayout";

export default function Terms() {
  usePageMetadata({
    title: "Terms of Use | POWER FIT",
    description:
      "Read the terms governing the use of the POWER FIT fitness website.",
  });
  return (
    <LegalPageLayout title="Terms of Use">
      <p>
        <strong className="text-white">Last updated:</strong> October 24, 2026
      </p>

      <p>
        These terms describe the basic rules for using the POWER FIT website.
        They should be reviewed and adapted to the actual business before
        publication.
      </p>

      <section>
        <h2 className="mb-3 text-xl font-bold text-white">
          1. Website information
        </h2>

        <p>
          This website provides information about fitness programs, training
          facilities, and services. Details such as availability, trainer
          information, equipment, and opening hours should be confirmed with the
          gym before relying on them.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-white">2. Enquiries</h2>

        <p>
          Sending an enquiry does not create a membership, reserve a training
          session, or guarantee availability. Memberships and appointments are
          subject to confirmation by the gym and any separately provided terms.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-white">
          3. Health and fitness
        </h2>

        <p>
          Website content is provided for general informational purposes and is
          not a substitute for individualized medical advice. Consider your
          health and physical limitations before beginning a new exercise
          program, and seek qualified advice when appropriate.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-white">
          4. Intellectual property
        </h2>

        <p>
          Website branding, original text, and original design elements may be
          protected by applicable intellectual property laws. Third-party
          photographs and other assets remain subject to their respective
          licenses and usage terms.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-white">
          5. Website availability
        </h2>

        <p>
          We aim to keep the website available and information accurate, but
          interruptions, errors, or outdated information may occur. The operator
          should review any limitations of liability with qualified legal
          counsel before publishing this policy.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-white">
          6. Changes to these terms
        </h2>

        <p>
          These terms may be updated as the website and business services
          change. The effective date should be revised whenever a material
          update is published.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-white">7. Contact</h2>

        <p>
          Questions about these terms should be directed to the business using
          its official published contact details.
        </p>
      </section>
    </LegalPageLayout>
  );
}
