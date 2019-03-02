const servicesContent = [
  {
    name: 'Cervical spine',
    description: 'The most common and obvious symptoms of cervical degenerative disc disease are neck pain and a stiff neck. When one of these conditions presses on one or more of the many nerves running through the spinal cord, you also can develop pain, numbness, or weakness radiating down your shoulder, arm, and hand.',
    source: 'https://www.webmd.com/pain-management/features/neck-pain',
  },
  {
    name: 'Frozen shoulder (Adhesive Capsulitis)',
    description: 'Frozen shoulder is a condition that affects your shoulder joint. It usually involves pain and stiffness that develops gradually, gets worse and then finally goes away. If you have frozen shoulder, you’ll likely feel a dull or achy pain in one shoulder. You might also feel the pain in the shoulder muscles that wrap around the top of your arm. You might feel the same sensation in your upper arm. Your pain could get worse at night, which can make it hard to sleep.',
    source: 'https://www.webmd.com/a-to-z-guides/what-is-a-frozen-shoulder',
  },
  {
    name: 'Sprains/strains',
    description: 'A joint sprain is the overstretching or tearing of ligaments. A strain is also a stretch or tear, but it happens in a muscle or a tendon (tendons link muscles to bones). Ligaments are the bands of tissue that connect two bones together in a joint. The main difference is that with a sprain you may have bruising around the affected joint, whereas with a strain, you may have spasms in the affected muscle',
    source: 'https://www.healthline.com/health/sprain-vs-strain',
  },
  {
    name: 'Pre- and post operative rehabilitation',
    description: 'A physical therapist is a specialist trained to work with you to restore your activity, strength, and motion following an injury or surgery. Physical therapists can teach specific exercises, stretches, and techniques and use specialized equipment to address problems that cannot be managed without this specialized physical therapy training.',
    source: 'https://www.verywellhealth.com/physical-therapy-a2-2549751',
  },
  {
    name: 'ACL reconstruction',
    description: 'ACL reconstruction is surgery to replace a torn anterior cruciate (KROO-she-ate) ligament (ACL) - a major ligament in your knee. ACL injuries most commonly occur during sports that involve sudden stops and changes in direction - such as basketball, soccer, football, downhill skiing and gymnastics.',
    source: 'https://www.mayoclinic.org/tests-procedures/acl-reconstruction/about/pac-20384598',
  },
  {
    name: 'Ankle tendonitis/repairs',
    description: 'Peroneal tendonitis occurs when the peroneal tendons become inflamed. This happens when there is an increased load and overuse of the tendons, leading to them rubbing on the bone. This friction causes the tendons to swell. Over time, the tendons will thicken in size to try and manage the increased load more efficiently. Peroneal tendonitis is particularly common in athletes and especially runners, as they are more likely to make their feet roll outwards, causing friction between the tendon and bone.',
    source: 'https://www.medicalnewstoday.com/articles/318349.php',
  },
  {
    name: 'Tendonitis/Bursitis',
    description: 'Tendinitis or bursitis often involves the shoulder, elbow, wrist, hip, knee and ankle. The pain it causes may be quite severe and often occurs suddenly. ... Bursitis is inflammation of a bursa. This small sac acts as a cushion between moving structures (bones, muscles, tendons or skin).',
    source: 'https://www.rheumatology.org/I-Am-A/Patient-Caregiver/Diseases-Conditions/Tendinitis-Bursitis',
  },
  {
    name: 'Plantar fasciitis',
    description: 'Plantar fasciitis (PLAN-tur fas-e-I-tis) is one of the most common causes of heel pain. It involves inflammation of a thick band of tissue that runs across the bottom of your foot and connects your heel bone to your toes (plantar fascia). Plantar fasciitis commonly causes stabbing pain that usually occurs with your first steps in the morning. As you get up and move more, the pain normally decreases, but it might return after long periods of standing or after rising from sitting. Plantar fasciitis is more common in runners. In addition, people who are overweight and those who wear shoes with inadequate support have an increased risk of plantar fasciitis.',
    source: '',
  },
  {
    name: 'Bunionectomy',
    description: 'A bunionectomy is a surgical procedure to excise, or remove, a bunion. A bunion is an enlargement of the joint at the base of the big toe and is comprised of bone and soft tissue. It is usually a result of inflammation and irritation from poorly fitting (narrow and tight) shoes in.',
    source: 'https://www.encyclopedia.com/medicine/encyclopedias-almanacs-transcripts-and-maps/bunionectomy-0',
  },
  {
    name: 'Tennis elbow',
    description: 'Tennis elbow, or lateral epicondylitis, is the most common injury in patients seeking medical attention for elbow pain. Exactly what causes tennis elbow is unknown, but it is thought to be due to small tears of the tendons that attach forearm muscles to the arm bone at the elbow joint.',
    source: 'https://www.verywellhealth.com/tennis-elbow-a2-2549917',
  },
  {
    name: 'Carpal tunnel syndrome',
    description: 'Carpal tunnel syndrome is a common condition that causes pain, numbness, and tingling in the hand and arm. The condition occurs when one of the major nerves to the hand - the median nerve - is squeezed or compressed as it travels through the wrist.',
    source: 'https://orthoinfo.aaos.org/en/diseases--conditions/carpal-tunnel-syndrome/',
  },
  {
    name: 'Balance and gait disorders',
    description: 'Gait, the process of walking, and balance are intricate movements. They rely on proper functioning from several areas of the body, including the: ears eyes brain muscles sensory nerves Problems with any of these areas can lead to walking difficulties, falls, or injury if not addressed. Walking difficulties can be temporary or long-term, depending on the cause.',
    source: 'https://www.healthline.com/symptom/gait-abnormality',
  },
  {
    name: 'Neck pain',
    description: 'Neck pain is a common complaint. Neck muscles can be strained from poor posture - whether it\'s leaning over your computer or hunching over your workbench. Osteoarthritis also is a common cause of neck pain. Rarely, neck pain can be a symptom of a more serious problem.',
    source: 'https://www.mayoclinic.org/diseases-conditions/neck-pain/symptoms-causes/syc-20375581',
  },
  {
    name: 'Chronic Pain Syndrome',
    description: 'for many people, pain continues long after its cause is gone. When it lasts for 3 to 6 months or more, it\'s called chronic pain. When you hurt day after day, it can take a toll on your emotional and physical health. About 25% of people with chronic pain will go on to have a condition called chronic pain syndrome (CPS). That\'s when people have symptoms beyond pain alone, like depression and anxiety, which interfere with their daily lives. CPS can be hard to treat, but it\'s not impossible. A mix of treatments like counseling, physical therapy, and relaxation techniques can help relieve your pain and the other symptoms that come with it.',
    source: 'https://www.webmd.com/pain-management/chronic-pain-syndrome-overview',
  },
  {
    name: 'Sports-related injuries',
    description: 'A sports-related injury may result from a single traumatic event, such as a fall or collision, or from overuse when the body does not have time to heal from a repeated action. Most sports injuries are due to either trauma or overuse of muscles or joints. The majority are caused by minor trauma involving muscles, ligaments, tendons, or bones, including: contusions (bruises), sprains, strains, Fractures, and dislocations',
    source: 'https://www.hopkinsmedicine.org/healthlibrary/conditions/adult//mens_health/sports-related_injuries_85,P01182',
  },
  {
    name: 'Fall prevention',
    description: 'Fall prevention may not seem like a lively topic, but it\'s important. As you get older, physical changes and health conditions - and sometimes the medications used to treat those conditions - make falls more likely. In fact, falls are a leading cause of injury among older adults. Still, fear of falling doesn\'t need to rule your life. Instead, consider six simple fall-prevention strategies.',
    source: 'https://www.mayoclinic.org/healthy-lifestyle/healthy-aging/in-depth/fall-prevention/art-20047358',
  },
  {
    name: 'Myofascial pain syndromes',
    description: 'Myofascial pain syndrome is a chronic pain disorder. In this condition, pressure on sensitive points in your muscles (trigger points) causes pain in the muscle and sometimes in seemingly unrelated parts of your body. This is called referred pain. This syndrome typically occurs after a muscle has been contracted repetitively. This can be caused by repetitive motions used in jobs or hobbies or by stress-related muscle tension. While nearly everyone has experienced muscle tension pain, the discomfort associated with myofascial pain syndrome persists or worsens. Treatment options include physical therapy and trigger point injections. Pain medications and relaxation techniques also can help.',
    source: 'https://www.mayoclinic.org/diseases-conditions/myofascial-pain-syndrome/symptoms-causes/syc-20375444',
  },
  {
    name: 'TMJ dysfunction',
    description: 'Temporomandibular joint dysfunction (TMD, TMJD) is an umbrella term covering pain and dysfunction of the muscles of mastication (the muscles that move the jaw) and the temporomandibular joints (the joints which connect the mandible to the skull).',
    source: 'https://en.wikipedia.org/wiki/Temporomandibular_joint_dysfunction',
  },
  {
    name: 'Brachial plexus injuries',
    description: 'The brachial plexus is a network of intertwined nerves that control movement and sensation in the arm and hand. A traumatic brachial plexus injury involves sudden damage to these nerves, and may cause weakness, loss of feeling, or loss of movement in the shoulder, arm, or hand.',
    source: 'https://orthoinfo.aaos.org/en/diseases--conditions/brachial-plexus-injuries/',
  },
  {
    name: 'Sports-specific training and conditioning',
    description: 'Sports-specific training and conditioning',
    source: '',
  },
  {
    name: 'Neurological disorders including Multiple Sclerosis, Parkinson\'s and post CVA',
    description: 'A neurologic physical therapist is a physical therapist who specializes in the evaluation and treatment of individuals with movement problems due to disease or injury of the nervous system. Physical therapists can help improve or restore the mobility you need to move forward with your life.',
    source: 'www.neuropt.org/consumer-info/neurologic-disorders-index',
  },
  {
    name: 'Pre and post natal dysfunction',
    description: 'Our physical therapists address the musculoskeletal components of pregnancy and postpartum issues, including incontinence, pelvic floor muscle dysfunction and prenatal joint/muscle dysfunction. Weakness, poor muscle coordination, abdominal strength or bladder habits may also contribute to musculoskeletal dysfunction.',
    source: 'https://dynamic-physical-therapy.com/physical-therapy-treatments/pre-natal-therapy/',
  },
  {
    name: 'Post Mastectomy',
    description: 'Postoperative physical therapy that begins as early as 2 days after surgery significantly improves joint mobility and "widely improves the quality of life" for women who underwent mastectomies, according to a new study. Researchers found that women who received physical therapy regained normal glenohumeral function 1 year after surgery and reported less pain, while an untreated control group continued to report limitations.',
    source: 'http://www.apta.org/PTinMotion/NewsNow/2014/2/18/PTAfterMastectomy/',
  },
  {
    name: 'Work-related injuries',
    description: 'physical therapists are trained to work with patients in order to restore strength, mobility, and activity following an injury, they are a hugely effective resource for people. Physical therapists will come up with a personalized treatment plan, teaching patients specific exercises, stretches, and techniques designed to help them recover as quickly as possible. When it comes to those suffering from work-related injuries, physical therapists are extremely knowledgeable and are able to tailor their efforts in order to improve the patient’s well-being and get them back to work - safely - as soon as possible. Here is a look at a few of the main ways physical therapy can help those with work injuries:',
    source: 'http://www.classicrehabilitation.com/blog/how-physical-therapy-can-help-those-with-work-related-injuries/',
  },
  {
    name: 'Arthritis',
    description: 'Physical therapy works to strengthen joints that have been weakened by damage and inflammation. Physical therapy exercises can help reduce joint pain and stiffness, as well as improve range of motion, making you more mobile',
    source: 'https://www.everydayhealth.com/arthritis/other-physical-therapies.aspx',
  },
  {
    name: 'Back pain',
    description: 'Physical therapy consists of hands-on treatment to loosen muscles and joints, education on proper posture and movement to decrease pain, instruction on stretching and strengthening exercises to restore mobility and strength, and modalities such as electrical stimulation, cold/heat and ultrasound',
    source: 'https://www.cbphysicaltherapy.com/pain-101-low-back-pain/',
  },
  {
    name: 'Osteopenia/Osteoporosis',
    description: 'Osteopenia and osteoporosis are related conditions. Osteopenia is a bone condition characterized by decreased bone density, which leads to bone weakening and an increased risk of bone fracture. The difference between osteopenia and osteoporosis is that in osteopenia the bone loss is not as severe as in osteoporosis. That means someone with osteopenia is more likely to fracture a bone than someone with a normal bone density but is less likely to fracture a bone than someone with osteoporosis. People with osteomalacia and those with osteopenia may have no symptoms. Both osteomalacia and osteopenia increase the risk of breaking a bone. However, symptoms of osteomalacia include bone pain and muscle weakness, bone tenderness, difficulty walking, and muscle spasms. These symptoms are not caused by osteopenia.',
    source: 'https://www.medicinenet.com/osteopenia/article.htm',
  },
  {
    name: 'Scoliosis',
    description: 'Scoliosis is a sideways curvature of the spine that occurs most often during the growth spurt just before puberty. While scoliosis can be caused by conditions such as cerebral palsy and muscular dystrophy, the cause of most scoliosis is unknown.',
    source: 'https://www.mayoclinic.org/diseases-conditions/scoliosis/symptoms-causes/syc-20350716',
  },
  {
    name: 'Rotator cuff disorders/repairs',
    description: 'Rotator cuff disorders include: Inflammation of the tendons (tendinitis) or of a bursa (bursitis). ... Impingement, in which a tendon is squeezed and rubs against bone. Calcium buildup in the tendons, which causes a painful condition called calcific tendinitis.',
    source: 'https://myhealth.alberta.ca/Health/pages/conditions.aspx?hwid=hw105845',
  },
  {
    name: 'Vestibular Rehabilitation Therapy',
    description: 'Vestibular rehabilitation (VR), or vestibular rehabilitation therapy (VRT) is a specialized form of therapy intended to alleviate both the primary and secondary problems caused by vestibular disorders. It is an exercise-based program primarily designed to reduce vertigo and dizziness, gaze instability, and/or imbalance and falls. For most people with a vestibular disorder the deficit is permanent because the amount of restoration of vestibular function is very small. However, after vestibular system damage, people can feel better and function can return through compensation. This occurs because the brain learns to use other senses (vision and somatosensory, i.e. body sense) to substitute for the deficient vestibular system. The health of particular parts of the nervous system (brainstem and cerebellum, visual, and somatosensory sensations) is important in determining the extent of recovery that can be gained through compensation.',
    source: 'https://vestibular.org/understanding-vestibular-disorder/treatment/treatment-detail-page',
  },
  {
    name: 'Vertigo',
    description: 'Vertigo is a sensation of spinning dizziness. It is not, as many people maintain, a fear of heights. It is often associated with looking down from a great height but can refer to any temporary or ongoing spells of dizziness caused by problems in the inner ear or brain. Many conditions can cause vertigo.',
    source: 'https://www.medicalnewstoday.com/knowledge/160900/vertigo-causes-symptoms-treatments',
  },
];


export default servicesContent;