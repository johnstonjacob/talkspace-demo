import { Selector } from 'testcafe';

fixture `Testing Header & Hero Section`
    .page `../index.html`;

test('Check page has welcome message', async t => {
  await t
      .expect(Selector('.intro-lead-in').innerText).eql('Welcome To Our Studio!');
});

test('Check subheading matches marketing template', async t => {
  await t
      .expect(Selector('.intro-heading').innerText).eql("IT'S NICE TO MEET YOU");
});

test('Check button has effective call to action', async t => {
  await t
      .expect(Selector('.intro-text').find('.btn').innerText).eql('TELL ME MORE');
});

test('Check navbar has link to services', async t => {
  await t
      .expect(Selector('.navbar-nav').find('.nav-link').getAttribute('href')).eql('#services');
});
